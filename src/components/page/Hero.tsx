import {cn} from '@/lib/utils'
import {ReactNode} from 'react'
import {BadgeCheck, PhoneCall, Pencil} from 'lucide-react'
interface HeroProps {
	children?: ReactNode
	className?: string
}

function Hero({className}: HeroProps) {
	return (
		<section className=" py-2 px-4 ">
			<picture>
				{/* sm: 640px and up */}
				<source
					media="(min-width: 640px)"
					srcSet="https://res.cloudinary.com/jimbits/image/upload/v1756171559/roll-on-painting/condo-renovation-room-being-painted-blue-wall-ladder-paint-bucket.avif"
					type="image/avif"
				/>

				{/* Default: mobile first (below 640px) */}
				<img
					src="https://res.cloudinary.com/jimbits/image/upload/v1756171559/roll-on-painting/condo-renovation-room-being-painted-blue-wall-ladder-paint-bucket.avif"
					alt="Painted living room with orange trim and white walls in Edmonton home renovation"
					loading="lazy"
					className="w-full h-auto  "
				/>
			</picture>
			<div className="mt-2 mb-4 space-y-1.5">
				<p className="font-semibold text-2xl text-center  sm:text-5xl ">
					Roll on Quality Edmonton!
				</p>
				<p className="text-center">
					Edmonton's most trusted residential painting company serving homeowners for over 15 years
					with guaranteed satisfaction.
				</p>
			</div>
			<div className="space-y-4">
				{/* <ul className="max-w-fit mx-auto    space-y-1.5 py-10 px-8 font-medium   text-zinc-600 tracking-tight bg-stone-100/50  shadow- shadow-stone-500/40 rounded">
					<li className="flex gap-2">
						<BadgeCheck className="stroke-indigo-600 " />
						<p>30+ Years of Painting Edmonton Homes.</p>
					</li>
					<li className="flex gap-2">
						<BadgeCheck className="stroke-indigo-600 " />
						<p>Quality Craftsmanship Guaranteed</p>
					</li>
					<li className="flex gap-2">
						<BadgeCheck className="stroke-indigo-600 " />
						<p>Licensed & Insured </p>
					</li>
					<li className="flex gap-2">
						<BadgeCheck className="stroke-indigo-600 " />
						<p>Eco-Friendly Painting Options</p>
					</li>
				</ul> */}

				{/* Call To Action */}
				<div className="flex flex-col items-center  gap-1    ">
					<div className="w-sm max-w-[300px] ">
						<h3 className="font-bold text-xl text-center text-zinc-700">Free Estimate Call Now</h3>
						<button
							type="button"
							className="w-full    py-2 px-6     b text-base font-medium rounded-md  bg-orange-600  text-white  "
						>
							(780)-722-5555
						</button>
					</div>
					<div className="w-sm max-w-[300px] ">
						<button
							type="button"
							className=" w-full    py-2 px-6       text-base font-medium rounded-md   bg-blue-600 text-white"
						>
							<div>
								<p>Get Free Online Quote</p>
							</div>
						</button>
					</div>
				</div>

				{/* <button
					type="button"
					className="w-full inline-flex items-center justify-center px-8 py-3   border  border-indigio-500 text-base font-medium rounded-md  text-indigo-600  bg-white  md:py-4 md:text-lg md:px-10"
				>
					Calculate Your Project Cost Free Painting Estimator"
				</button> */}
			</div>
		</section>
	)
}

export default Hero
