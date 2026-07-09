import { AddIcon, BellNotificationIcon, ChatBubbleIcon, CrownRewardIcon, MultipleStarsIcon, SizzleLogo, UsdCircleIcon, UserStarsIcon } from "@/assets/icons"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function Navbar() {
    const TEMP_USER_IMAGE = "https://plus.unsplash.com/premium_photo-1681506669115-cb6b2d30dbc7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
        <header className="py-6 px-7.5">
            <div className="content-container flex w-full items-center">
                <nav className="flex w-full items-center justify-between">
                    {/* Left Nav */}
                    <div className="flex flex-1 gap-2">
                        <Button icon={<MultipleStarsIcon className="w-4 h-4" />} weight={"semibold"}>For You</Button>
                        <Button icon={<UserStarsIcon className="w-4 h-4" />} weight={"semibold"} variant={"inactive"}>Following</Button>
                        <Button icon={<CrownRewardIcon className="w-4 h-4" />} weight={"semibold"} variant={"inactive"}>Membership</Button>
                    </div>

                    {/* Center Logo */}
                    <SizzleLogo className="w-28 h-8" />

                    {/* Right Nav */}
                    <div className="flex flex-1 items-center justify-end gap-2">
                        <Button
                            icon={<AddIcon className="w-3.5 h-3.5 text-foreground" />}
                            weight={"bold"}
                            className="bg-center bg-cover text-foreground"
                            style={{ backgroundImage: `url('/images/gradient-background.png')` }}
                        >
                            Create
                        </Button>

                        <Button icon={<ChatBubbleIcon className="w-4 h-4" />} weight={"semibold"} variant={"inactiveWithActiveText"} />
                        <Button icon={<BellNotificationIcon className="w-4 h-4" />} weight={"semibold"} variant={"inactiveWithActiveText"} />
                        <Button icon={<UsdCircleIcon className="w-4 h-4" />} weight={"semibold"} variant={"inactiveWithActiveText"}>
                            1280.55
                        </Button>

                        <Avatar className="h-10 w-auto aspect-square rounded-sm [&::after]:border-0">
                            <AvatarImage className="w-full h-full object-cover rounded-sm" src={TEMP_USER_IMAGE} />
                            <AvatarFallback>SZ</AvatarFallback>
                        </Avatar>
                    </div>
                </nav>
            </div>
        </header>
    )
}
