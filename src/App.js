/*
 * @Author: anne.yang
 * @Date: 2022-08-29 21:45:04
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-08-29 22:37:53
 */
import React, { Component } from 'react'
import { Button, DatePicker, Space, version } from "antd";
import "antd/dist/antd.css";
import "./index.css"


export default class App extends Component {

    render() {
        return (
            <div className="App">
                <h1>antd version: {version}</h1>
                <Space>
                    <DatePicker />
                    <Button type="primary">Primary Button</Button>
                </Space>
            </div>
        )
    }
};
