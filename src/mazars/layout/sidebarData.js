
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';


export const SidebarData = 
{
    customer:[
        {
            title: "Dashboard",
            path: "/customer/dashboard",
            icon: <FaIcons.FaHome fill="black"/>
        },
        {
            title: "Queries",
            path: "/customer/queries",
            icon: <IoIcons.IoIosPaper fill="black" />,
        },
        {
            title: "Proposal",
            path: "/customer/proposal",
            icon: <FaIcons.FaEnvelope fill="black"/>
        },
        {
            title: "Assignment",
            path: "/customer/assignment",
            icon: <FaIcons.FaFile fill="black"/>
        },
        {
            title: "Schedule",
            path: "/customer/schedule",
            icon : <FaIcons.FaCalendar fill="black" />
        },
        {
        title: "Feedback",
        path: "/customer/feedback",
        icon: <IoIcons.IoMdHelpCircle fill="black"/>,
        }
    ],
    admin: [
        {
            title: "Dashboard",
            path: "/admin/dashboard",
            icon: <FaIcons.FaHome fill="black"/>
        },
        {
            title: "Queries",
            path: "/admin/queries",
            icon: <IoIcons.IoIosPaper fill="black"/>,
        },
        {
            title: "TP",
            path: "/admin/tax-professionals",
            icon: <IoIcons.IoIosPaper fill="black"/>,
        },
        {
            title: "Proposal",
            path: "/admin/proposal",
            icon: <FaIcons.FaEnvelope fill="black"/>
        },
        {
            title: "Assignment",
            path: "/admin/assignment",
            icon: <FaIcons.FaFile fill="black"/>
        }
    ],
    tl: [
        {
            title: "Dashboard",
            path: "/tl/dashboard",
            icon: <FaIcons.FaHome fill="black"/>
        },
        {
            title: "Queries",
            path: "/tl/queries",
            icon: <IoIcons.IoIosPaper fill="black"/>,
        },
        {
            title: "Proposal",
            path: "/tl/proposal",
            icon: <FaIcons.FaEnvelope fill="black"/>
        },
        {
            title: "Assignment",
            path: "/tl/assignment",
            icon: <FaIcons.FaFile fill="black"/>
        }
    ],
    tp: [
        {
            title: "Dashboard",
            path: "/tp/dashboard",
            icon: <FaIcons.FaHome fill="black"/>
        },
        {
            title: "Queries",
            path: "/tp/queries",
            icon: <IoIcons.IoIosPaper fill="black"/>,
        },
        {
            title: "Proposal",
            path: "/tp/proposal",
            icon: <FaIcons.FaEnvelope fill="black"/>
        },
        {
            title: "Assignment",
            path: "/tp/assignment",
            icon: <FaIcons.FaFile fill="black"/>
        }
    ]
};