import {cn} from '@/lib/utils'
import {ReactNode} from 'react'
import {Menu, PhoneCallIcon} from 'lucide-react'
interface AppBarProps {
	children?: ReactNode
	className?: string
}

function AppBar({className}: AppBarProps) {
	return (
		<div className={cn('', className)}>
			<ul className={cn('flex justify-between items-center')}>
				<li>
					<PhoneCallIcon className="text-stone-600" />
				</li>
				<li>
					<h1 className="text-center text-sm">
						Edmonton House Painting Services{' '}
						<span className="block">Interior & Exterior Residential Painters</span>
					</h1>
				</li>
				<li>
					<Menu className="text-stone-600" />
				</li>
			</ul>
		</div>
	)
}

export default AppBar
