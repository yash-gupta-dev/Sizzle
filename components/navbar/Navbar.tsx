import { AddIcon, BellNotificationIcon, ChatBubbleIcon, CrownRewardIcon, MultipleStarsIcon, SizzleLogo, UsdCircleIcon, UserStarsIcon } from "@/assets/icons"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { TEMP_USER_IMAGE } from "@/data/demo.data"

export default function Navbar() {
    return (
        <header className="p-7.5">
            <div className="content-container flex w-full items-center">
                <nav className="flex w-full items-center justify-between">
                    {/* Left Nav */}
                    <div className="flex flex-1 gap-2">
                        <Button icon={<MultipleStarsIcon className="w-4 h-4" />} variant={"active"} fontSize={'sm'}>For You</Button>
                        <Button icon={<UserStarsIcon className="w-4 h-4" />} fontSize={'sm'}>Following</Button>
                        <Button icon={<CrownRewardIcon className="w-4 h-4" />} fontSize={'sm'}>Memberships</Button>
                    </div>

                    {/* Center Logo */}
                    <SizzleLogo className="w-28 h-8" />

                    {/* Right Nav */}
                    <div className="flex flex-1 items-center justify-end gap-2">
                        <Button
                            icon={<AddIcon className="w-3.5 h-3.5 text-foreground" />}
                            className="bg-center bg-cover text-foreground"
                            style={{ backgroundImage: `url('/images/gradient-background.png')` }}
                            weight={"normal"}
                        >
                            Create
                        </Button>

                        <Button
                            icon={<ChatBubbleIcon className="w-4 h-4" />}
                            variant={"inactiveWithActiveText"}
                            bordered={"slim"}
                        />

                        <Button
                            icon={<BellNotificationIcon className="w-4 h-4" />}
                            variant={"inactiveWithActiveText"}
                            bordered={"slim"}
                        />

                        <Button
                            icon={<UsdCircleIcon className="w-4 h-4" />}
                            variant={"inactiveWithActiveText"}
                            bordered={"slim"}
                        >
                            1280.55
                        </Button>

                        {/* @ts-ignore */}
                        <Avatar style={{ cornerShape: 'squircle' }} className="h-10 w-auto aspect-square rounded-4xl [&::after]:border-0">
                            {/* @ts-ignore */}
                            <AvatarImage style={{ cornerShape: 'squircle' }} className="w-full h-full object-cover rounded-4xl" src={TEMP_USER_IMAGE} />
                            <AvatarFallback>SZ</AvatarFallback>
                        </Avatar>
                    </div>
                </nav>
            </div>
        </header>
    )
}
