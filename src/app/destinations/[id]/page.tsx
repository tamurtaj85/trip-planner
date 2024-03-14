import { MenuIcon, UserPlusIcon } from '@/assets/icons';
import { MapImage } from '@/assets/images';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  H6,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  Paragraph,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui';
import { DESTINATION_DETAILS_TABS_ENUM } from '@/constants/destination';
import { objectValues } from '@/lib/utils';
import Image from 'next/image';
import { Overview } from './overview';

const { BOOKINGS, BUDGET, OVERVIEW, PACKING_LIST, THINGS_TO_KNOW } =
  DESTINATION_DETAILS_TABS_ENUM;

const page = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8 pt-4 pr-8">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="w-40 h-20 border rounded-lg bg-slate-200">
              <Image alt="destination-img" src={''} />
            </div>
            <div>
              <div>
                <H6>Paris, France</H6>
              </div>
              <div>
                <Paragraph className="text-gray-500">3 days trip</Paragraph>
              </div>
              <div>
                <Paragraph className="text-gray-500">
                  20 recommendations
                </Paragraph>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <Button variant={'outline'}>
                <span className="mr-2">
                  <UserPlusIcon size={18} />
                </span>
                Invite
              </Button>
            </div>
            <div>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>
                    <MenuIcon />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Tabs defaultValue={OVERVIEW.key}>
            <TabsList className="bg-transparent">
              {objectValues(DESTINATION_DETAILS_TABS_ENUM).map(
                ({ key, name }, index) => (
                  <TabsTrigger
                    key={index}
                    value={key}
                    className="data-[state=active]:text-violet-900 data-[state=active]:shadow-none data-[state=active]:border-b-[1px] data-[state=active]:border-b-violet-900"
                  >
                    {name}
                  </TabsTrigger>
                )
              )}
            </TabsList>
            <Separator />
            <TabsContent value={OVERVIEW.key}>
              <Overview />
            </TabsContent>
            <TabsContent value={BOOKINGS.key}>Bookings.</TabsContent>
            <TabsContent value={BUDGET.key}>Budget.</TabsContent>
            <TabsContent value={PACKING_LIST.key}>Packing list.</TabsContent>
            <TabsContent value={THINGS_TO_KNOW.key}>
              Things to know.
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="col-span-4">
        <Image
          alt="map-img"
          src={MapImage}
          style={{ width: '100%', objectFit: 'fill' }}
        />
      </div>
    </div>
  );
};

export default page;
