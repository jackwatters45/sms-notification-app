import { mdiCogOutline } from "@mdi/js";
import Icon from "@mdi/react";

import { Button, ButtonProps } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GroupTable from "@/components/GroupTable";
import GroupSettings from "@/components/GroupSettings";

interface IGroupOptionsProps {
	buttonProps?: ButtonProps;
}

const defaultButtonProps: ButtonProps = {
	children: <Icon path={mdiCogOutline} size={1.5} />,
	variant: "ghost",
	className: "absolute right-6 text-blue-500 hover:text-blue-600",
};

const GroupOptions = ({ buttonProps = defaultButtonProps }: IGroupOptionsProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button {...buttonProps} />
			</DialogTrigger>
			<DialogContent className="max-w-2xl">
				<Tabs defaultValue="settings">
					<div className="pt-5">
						<TabsList className="w-full">
							<TabsTrigger value="settings" className="flex-1">
								Settings
							</TabsTrigger>
							<TabsTrigger value="recipients" className="flex-1">
								Recipients
							</TabsTrigger>
						</TabsList>
					</div>
					<TabsContent value="settings">
						<GroupSettings />
					</TabsContent>
					<TabsContent value="recipients">
						<GroupTable />
					</TabsContent>
				</Tabs>
			</DialogContent>
		</Dialog>
	);
};

export default GroupOptions;
