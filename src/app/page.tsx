import Services from '@/components/page/Services'
import Hero from '@/components/page/Hero'
import OurProcess from '@/components/page/OurProcess'
import AppBar from '@/components/page/AppBar'
import Preview from '@/components/page/Preview'
import Reviews from '@/components/page/Reviews'
import LandingPageHeader from '@/components/page/LandingPageHeader'
export default function Home() {
	return (
		<>
			<header></header>
			<AppBar className=" py-2 px-4" />
			<LandingPageHeader className="mb-2" />
			<main>
				<Hero />
				<Services />
				<OurProcess />
				<Preview />
				<Reviews />
			</main>
		</>
	)
}
