import { createSignal, type Component } from 'solid-js'
import { createViewportObserver } from '@solid-primitives/intersection-observer'
import cooldog from '@media/images/main.jpeg'

type Props = {}

export const MainBanner: Component<Props> = (props) => {
	const [startAnimation, setStartAnimation] = createSignal(false)

	const [intersectionObserver] = createViewportObserver()

	return (
		<div
			use:intersectionObserver={() => setStartAnimation(true)}
			class="w-full overflow-hidden bg-secondary-100 pt-20"
		>
			<div class="container flex flex-col justify-start md:flex-row">
				<div class="flex w-1/2 flex-col p-20">
					<span>NOWY MIOT JUZ W LIPCU</span>
					<h1 class="mb-8">
						NEXT TO <span class="text-secondary">HEAVEN</span>
					</h1>
					<p class="text-primary-600">
						Domowa hodowla, w której psy są zawsze na pierwszym miejscu. Zapraszamy do naszego
						nowego miotu!
					</p>
				</div>
				<div
					class="w-1/2 px-32 pt-10 transition-transform duration-1000"
					classList={{ 'translate-x-[150%]': !startAnimation() }}
				>
					<img src={cooldog.src} alt="" width={400} />
				</div>
			</div>
		</div>
	)
}
