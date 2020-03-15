import React, {Component} from "react";
import {View, Text, Drawer } from 'native-base';
import DrawerItem from "./drawerItem";
import SideBar from "./sideBar";


class DrawerHOC extends Component{

    closeDrawer = () => {
        this.drawer._root.close()
    };

    openDrawer = () => {
        this.drawer._root.open()
    };

    render(){
        return (

            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={
                    <SideBar
                        navigator={this.navigator}
                    />
                }
                onClose={() => {
                    this.closeDrawer()
                }}
            >

            </Drawer>
        )
    }
}

export default DrawerHOC;