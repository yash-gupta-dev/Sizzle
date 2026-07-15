import { Slider as SliderPrimitive } from "@base-ui/react/slider"
import { cn } from "@/lib/utils"
import { useRef, useState } from "react"
import Image from "next/image"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderPrimitive.Root.Props) {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max]

  const trackRef = useRef<HTMLDivElement>(null)
  const [hoverPercent, setHoverPercent] = useState<number | null>(null)

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!track) return
    const rect = track.getBoundingClientRect()
    const percent = ((e.clientX - rect.left) / rect.width) * 100
    setHoverPercent(Math.min(100, Math.max(0, percent)))
  }

  const handlePointerLeave = () => setHoverPercent(null)

  // const hoverValue =
  //   hoverPercent !== null ? min + (hoverPercent / 100) * (max - min) : null

  return (
    <SliderPrimitive.Root
      className={cn("data-horizontal:w-full data-vertical:h-full", className)}
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control className="relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col">

        {hoverPercent !== null && (
          <div
            className="pointer-events-none absolute bottom-full z-10 mb-3 -translate-x-1/2 transition-opacity duration-150"
            style={{ left: `${hoverPercent}%` }}
          >
            <Image
              src={'/images/creator-star2.jpg'}
              alt=""
              className="min-h-30 min-w-19.5 rounded-md border border-white/20 object-cover shadow-lg"
              width={78}
              height={120}
            />
          </div>
        )}

        <SliderPrimitive.Track
          ref={trackRef}
          data-slot="slider-track"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className="relative grow overflow-hidden rounded-full bg-white/25 select-none data-horizontal:h-1.5 data-horizontal:w-full data-vertical:h-full data-vertical:w-1"
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className="select-none data-horizontal:h-full data-vertical:w-full"
            style={{
              backgroundImage: 'linear-gradient(#D9107F, #EE1E03, #F61785, #FC7C20)'
            }}
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            className="relative block size-3 shrink-0 rounded-full border border-ring bg-white ring-destructive/20 transition-[color,box-shadow] select-none after:absolute after:-inset-2 hover:ring-5 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 disabled:pointer-events-none disabled:opacity-50"
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

export { Slider }