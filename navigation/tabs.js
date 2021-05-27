import React from "react";
import {
    TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { connect } from 'react-redux'
import { setTradeModalVisility } from '../stores/tab/tabActions';
import { Home, Portfolio, Market, Profile } from "../screens"
import { TabIcon } from '../components'
import { COLORS, icons } from "../constants"

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
}

const Tabs = ({ setTradeModalVisility, isTradeModalVisible }) => {

    function tradeTabButtonOnClickHandler() {
        setTradeModalVisility(!isTradeModalVisible)
    }

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    height: 140,
                    backgroundColor: COLORS.primary,
                    borderTopColor: "transparent",
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (!isTradeModalVisible) {
                            return (
                                <TabIcon
                                    focused={focused}
                                    icon={icons.home}
                                    label="Home"
                                />
                            )
                        }
                    }
                }}
                listeners={{
                    tabPress: e => {
                        if (isTradeModalVisible) {
                            e.preventDefault()
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Portfolio"
                component={Portfolio}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (!isTradeModalVisible) {
                            return (
                                <TabIcon
                                    focused={focused}
                                    icon={icons.briefcase}
                                    label="Portfolio"
                                />
                            )
                        }
                    }
                }}
                listeners={{
                    tabPress: e => {
                        if (isTradeModalVisible) {
                            e.preventDefault()
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Trade"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcon
                                focused={focused}
                                icon={isTradeModalVisible ? icons.close : icons.trade}
                                label="Trade"
                                isTrade={true}
                            />
                        )
                    },
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                            onPress={() => tradeTabButtonOnClickHandler()}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Market"
                component={Market}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (!isTradeModalVisible) {
                            return (
                                <TabIcon
                                    focused={focused}
                                    icon={icons.market}
                                    label="Market"
                                />
                            )
                        }

                    }
                }}
                listeners={{
                    tabPress: e => {
                        if (isTradeModalVisible) {
                            e.preventDefault()
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (!isTradeModalVisible) {
                            return (
                                <TabIcon
                                    focused={focused}
                                    icon={icons.profile}
                                    label="Profile"
                                />
                            )

                        }

                    }
                }}
                listeners={{
                    tabPress: e => {
                        if (isTradeModalVisible) {
                            e.preventDefault()
                        }
                    }
                }}
            />
        </Tab.Navigator>
    )
}

function mapStateToProps(state) {
    return {
        isTradeModalVisible: state.tabReducer.isTradeModalVisible
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setTradeModalVisility: (isVisible) => { return dispatch(setTradeModalVisility(isVisible)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);