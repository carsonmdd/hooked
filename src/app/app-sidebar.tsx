import { Home, Search, BotMessageSquare, Plus } from 'lucide-react';

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Menu items.
const items = [
	{
		title: 'Home',
		url: '/home',
		icon: Home,
	},
	{
		title: 'Explore',
		url: '/explore',
		icon: Search,
	},
	{
		title: 'Ask AI',
		url: '/ask-ai',
		icon: BotMessageSquare,
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<Link href='/' className='flex items-center'>
					<Image
						src='/hook-icon.png'
						alt='Fishing hook icon'
						width={40}
						height={40}
					/>
					<h1 className='text-3xl font-bold'>Hooked</h1>
				</Link>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu className='gap-4'>
							{items.map((item) => (
								<SidebarMenuItem
									key={item.title}
									className='border border-highlight-color rounded-md'
								>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
							<SidebarMenuItem>
								<Link href='/create'>
									<Button className='mt-4 h-8'>
										<Plus />
										Create Post
									</Button>
								</Link>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
