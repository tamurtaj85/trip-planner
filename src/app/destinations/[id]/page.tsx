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
import Image from 'next/image';

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
          <Tabs defaultValue="overview">
            <TabsList className="bg-transparent">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="budget">Budget</TabsTrigger>
              <TabsTrigger value="packingList">Packing List</TabsTrigger>
              <TabsTrigger value="thingsToKnow">Things to know</TabsTrigger>
            </TabsList>
            <Separator />
            <TabsContent value="overview">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="bookings">
              Change your password here.
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
