import {
  CarTaxiFront,
  EllipsisVertical,
  MapPin,
  MessageCircleQuestion,
  Repeat1,
  Star,
  StarHalf,
  Trash2,
} from '@/assets/icons';
import { JapanImage } from '@/assets/images';
import {
  Button,
  H6,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
  Paragraph,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';
import { DestinationsData } from '@/db/destinations';
import Image from 'next/image';
import React from 'react';

export const Overview = () => {
  return (
    <div>
      <div className="flex gap-4 justify-end items-center">
        <div>
          <Paragraph>Filter By</Paragraph>
        </div>
        <div>
          <Button variant={'outline'}>Hotels</Button>
        </div>
        <div>
          <Button variant={'outline'}>Restaurants</Button>
        </div>
        <div>
          <Button variant={'outline'}>Activites</Button>
        </div>
      </div>
      <div className="my-4">
        {DestinationsData.map((place, index) => (
          <PlaceCard key={index} index={index} placeData={place} />
        ))}
      </div>
    </div>
  );
};

interface IPlaceCard {
  index: number;
  placeData: Record<string, any>;
}

const PlaceCard: React.FC<IPlaceCard> = ({ index, placeData }) => {
  const { placeName, placeType, placeDetails } = placeData;

  return (
    <Sheet>
      <div className="flex gap-4 mb-2">
        <div className="flex flex-col gap-2 items-center">
          <div className="border border-violet-900 rounded-full size-9 flex flex-shrink-0 justify-center items-center">
            {index + 1}
          </div>
          <Separator orientation="vertical" className="shrink" />
        </div>
        <div className="w-full">
          <div className="flex justify-between border border-gray-300 rounded-md p-4">
            <SheetTrigger className="text-left w-full">
              <div className="basis-[95%]">
                <H6>{placeName}</H6>
                <Paragraph>{placeDetails}</Paragraph>
              </div>
            </SheetTrigger>
            <div>
              <Menubar className="border-none">
                <MenubarMenu>
                  <MenubarTrigger className="">
                    <EllipsisVertical className="text-gray-500" />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      <span className="mr-2">
                        <Repeat1 size={14} />
                      </span>
                      Replace with Guidebot
                    </MenubarItem>
                    <MenubarItem>
                      <span className="mr-2">
                        <MapPin size={14} />
                      </span>
                      Replace manually
                    </MenubarItem>
                    <MenubarItem className="text-red-500">
                      <span className="mr-2">
                        <Trash2 size={14} />
                      </span>
                      Remove place
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
          <div className="flex gap-4 items-end mt-2 text-gray-500">
            <CarTaxiFront size={20} />
            <Paragraph className="text-sm">
              Driving <span>{parseInt(`${Math.random() * 100}`)}</span> min
            </Paragraph>
          </div>
        </div>
      </div>
      <SheetContent className="p-0 min-w-[500px] overflow-y-auto">
        <div className="w-full min-h-56 h-[35%] bg-slate-500">
          <Image
            alt="visiting-place-img"
            src={JapanImage}
            style={{ width: '100%', minHeight: '14rem', height: '100%' }}
          />
        </div>
        <div className="p-4">
          <SheetHeader className="">
            <SheetTitle>{placeName}</SheetTitle>
            <div className="flex items-center gap-2 my-2">
              <div className="flex gap-2 text-yellow-400">
                <Star fill="gold" size={14} />
                <Star fill="gold" size={14} />
                <Star fill="gold" size={14} />
                <Star fill="gold" size={14} />
                <StarHalf fill="gold" size={14} />
              </div>
              <SheetDescription className="text-sm font-normal text-gray-500">
                (5000 Reviews on Google)
              </SheetDescription>
            </div>
          </SheetHeader>
          <div className="text-sm text-gray-500 mb-4">
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique facilis nam sed veniam non, quisquam, aperiam quibusdam
              est maxime iusto incidunt soluta repellat quam ipsa porro sit
              laboriosam dolorum quod.
            </p>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique facilis nam sed veniam non, quisquam, aperiam quibusdam
              est maxime iusto incidunt soluta repellat quam ipsa porro sit
              laboriosam dolorum quod.
            </p>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique facilis nam sed veniam non, quisquam, aperiam quibusdam
              est maxime iusto incidunt soluta repellat quam ipsa porro sit
              laboriosam dolorum quod.
            </p>
          </div>
          <div className="bg-slate-200 w-full p-2 rounded-md">
            <H6 className="flex gap-2 mb-2">
              <span>
                <MessageCircleQuestion className="text-violet-500" />
              </span>
              Why this choice?
            </H6>
            <div className="ml-8 ">
              <Paragraph className="text-sm text-gray-500 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique facilis nam sed veniam non, quisquam, aperiam
                quibusdam est maxime iusto incidunt soluta repellat quam ipsa
                porro sit laboriosam dolorum quod.
              </Paragraph>
              <Paragraph className="text-sm text-gray-500 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique facilis nam sed veniam non, quisquam, aperiam
                quibusdam est maxime iusto incidunt soluta repellat quam ipsa
                porro sit laboriosam dolorum quod.
              </Paragraph>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
