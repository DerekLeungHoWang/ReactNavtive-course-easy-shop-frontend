import React, { useState, useCallback } from "react"
import { View, FlatList, Text } from "react-native"
import axios from "axios"
import baseURL from "../../assets/common/baseUrl"
import { useFocusEffect } from "@react-navigation/native"
import AsyncStorage from "@react-native-community/async-storage"
import OrderCard from "../../Shared/OrderCard"

const Orders = (props) => {
    const [orderList, setOrderList] = useState();
    const [token, setToken] = useState();
    useFocusEffect(
        useCallback(
            () => {

                getOrders();
                return () => {
                    setOrderList();
                    setToken();
                }
            },
            [],
        )
    )
    const getOrders = () => {
        AsyncStorage.getItem("jwt")
            .then((res) => {
                console.log("token ", res);
                const config = {
                    headers: {
                        Authorization: `Bearer ${res}`,
                    }
                };
                console.log("config", config);
                axios
                    .get(`${baseURL}orders`, config)
                    .then((x) => {
                        console.log("in Order.js looking at x ", x);
                        setOrderList(x.data);
                    })
                    .catch((error) => console.log(error))
            })
            .catch((error) => console.log(error));

    }

    return (
        <View>
            <FlatList
                data={orderList}
                renderItem={({ item }) => {
                    console.log('orderCard ', item);
                    return <OrderCard navigation={props.navigation} {...item} editMode={true} />

                }}
                keyExtractor={(item) => item.id}
            />
        </View>

    )
}

export default Orders;