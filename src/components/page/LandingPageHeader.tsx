import {cn} from '@/lib/utils'
import {ReactNode} from 'react'

interface LandingPageHeaderProps {
	children?: ReactNode
	className?: string
}

function LandingPageHeader({className}: LandingPageHeaderProps) {
	return (
		<div className={cn('text-inherit sm:bg-blue-300', className)}>
			<p className="text-[40px] leading-12 text-center text-pretty font-extrabold gradient-text">
				Roll On Quality
			</p>
			<h2 className="font-semibold font-zinc-600 text-center">
				Edmonton's Most Trusted Residential Painting Contractors
			</h2>
			<h3 className="font-medium text-gray-700 text-center mt-2">
				Transform Your Home Today - Call for Free Quote
			</h3>
			<button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold">
				Get Free Estimate (780) 722-5555
			</button>
		</div>
	)
}

export default LandingPageHeader
