"use client"
import { SizzleLogo } from "@/assets/icons";
import { cn } from "@/lib/utils";

function DynamicBorder({
    className = "",
    logoClass = "",
    logoSize = 13.5,
    borderColor = "#FFFFFF50"
}: { gap?: number; className?: string; logoClass?: string; logoSize?: number; borderColor?: string }) {

    const logoSizeInPX = logoSize * 4
    return (
        <div className={`pointer-events-none absolute inset-0 ${className}`}>
            {/* top + left, rounded top-left corner. Width stops short of the
        top-right radius so it doesn't overlap the corner piece below. */}
            <div
                className={`absolute top-0 left-0 h-full border-t-2 rounded-tl-[15px] rounded-bl-[15px]`}
                style={{ width: `calc(100% - 15px)`, borderColor }}
            />

            {/* top-right corner + right border, shortened to leave a gap before it hits the bottom */}
            <div
                className={`absolute top-0 right-0 border-t-2 border-r-2 rounded-tr-[15px]`}
                style={{ width: '15px', height: `calc(100% - ${logoSizeInPX / 3.6 + 10}px)`, borderColor }}
            />

            <SizzleLogo className={cn(`absolute bottom-0 right-0 w-${logoSize + ""}`, logoClass)} />


            {/* bottom border */}
            <div
                className={`absolute bottom-0 left-0 h-full border-b-2 border-l-2 rounded-l-[15px]`}
                style={{ width: `calc(100% - ${logoSizeInPX + 20}px)`, borderColor }}
            />
        </div>
    );
}

export default DynamicBorder