"use client"

import { ExploreFilledIcon, ExploreOutlineIcon, HomeFilledIcon, HomeOutlineIcon, LeaderBoardFilledIcon, LeaderBoardOutlineIcon, SaveFilledIcon, SaveOutlineIcon, SearchFilledIcon, SearchOutlineIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BottomTab } from "@/components/ui/bottomTab";
import { useState } from "react";


export default function BottomTabs() {
    const [activeTab, setActiveTab] = useState("Home")

    const tabs = [
        {
            label: 'Home',
            Icon: activeTab === 'Home' ? HomeFilledIcon : HomeOutlineIcon,
        },
        {
            label: 'Explore',
            Icon: activeTab === 'Explore' ? ExploreFilledIcon : ExploreOutlineIcon,
        },
        {
            label: 'Search',
            Icon: activeTab === 'Search' ? SearchFilledIcon : SearchOutlineIcon,
        },
        {
            label: 'Leaderboard',
            Icon: activeTab === 'Leaderboard' ? LeaderBoardFilledIcon : LeaderBoardOutlineIcon,
        },
        {
            label: 'My Stuff',
            Icon: activeTab === 'My Stuff' ? SaveFilledIcon : SaveOutlineIcon,
        },
    ]

    const onTabClick = (tab: string) => {
        setActiveTab(tab)
    }

    return (
        <nav
            className={"fixed bottom-4 left-1/2 z-50 -translate-x-1/2"}
            aria-label="Bottom navigation"
        >
            <div
                className={"flex items-center justify-between rounded-[34px] px-10 py-3.75 bg-(--bottom-tab)/45 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-t border-t-(--gray-border)"}
            >
                {
                    tabs.map(t => {
                        const isActive = activeTab === t.label;
                        return <BottomTab
                            key={t.label}
                            onClick={() => onTabClick(t.label)}
                            icon={<t.Icon className="h-5.5 w-5.5" />}
                            variant={isActive ? "active" : "default"}>
                            {t.label}
                        </BottomTab>
                    })
                }
            </div>
        </nav>
    )
}
