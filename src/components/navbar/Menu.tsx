import { createSignal, For, type Component } from 'solid-js'

import menu from '@config/menu.json'

export interface NavigationLink {
	name: string
	url: string
}

type Props = {
	pathName: string
}

export const Menu: Component<Props> = (props) => {
	const { main }: { main: NavigationLink[] } = menu

	const [showDropdown, setshowDropdown] = createSignal(false)

	const handleShowDropDown = () => {
		setshowDropdown(!showDropdown())
	}

	const hideDropDown = () => {
		setshowDropdown(false)
	}

	const scrollIntoView = (id: string) => {
		document?.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	return (
		<nav class="border-gray-200">
			<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-200 md:hidden"
					aria-controls="navbar-default"
					aria-expanded="false"
					onClick={handleShowDropDown}
				>
					<span class="sr-only">Otworz menu glowne</span>
					<svg
						class="h-5 w-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div class="md:block md:w-auto" id="navbar-default">
					<div
						class="absolute left-full top-[71px] z-[1] h-screen w-full border-t-2 border-primary-200 bg-primary bg-opacity-95 shadow-md duration-500"
						classList={{ '-translate-x-full': showDropdown() }}
					>
						<ul class="flex h-full min-h-8 cursor-pointer flex-col items-center justify-start gap-8 border-b-2  py-4 text-center text-xl font-bold text-primary-900">
							<For each={main}>
								{(menuItem) => (
									<li onClick={hideDropDown} class="w-full">
										<span
											onClick={() => scrollIntoView(menuItem.url)}
											classList={{
												'border-b border-primary-200 text-primary-900 ':
													props.pathName === menuItem.url
											}}
											class=" hover:text-secondary"
										>
											{menuItem.name}
										</span>
									</li>
								)}
							</For>
						</ul>
					</div>
					<ul class="hidden min-h-8 cursor-pointer justify-center gap-5 py-4 text-xs font-bold md:flex">
						<For each={main}>
							{(menuItem) => (
								<li
									classList={{
										'after:transform-none': props.pathName === menuItem.url
									}}
									class="duration-700 hover:text-secondary"
									onClick={() => scrollIntoView(menuItem.url)}
								>
									{menuItem.name}
								</li>
							)}
						</For>
					</ul>
				</div>
			</div>
		</nav>
	)
}
