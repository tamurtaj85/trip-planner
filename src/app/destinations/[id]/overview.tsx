import { Button, H6, Paragraph, Separator } from '@/components/ui';
import { DestinationsData } from '@/db/destinations';
import { CarTaxiFront, EllipsisVertical } from '@/assets/icons';
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
    <div>
      <div className="flex gap-4 mb-2">
        <div className="flex flex-col gap-2 items-center">
          <div className="border border-violet-900 rounded-full size-9 flex flex-shrink-0 justify-center items-center">
            {index + 1}
          </div>
          <Separator orientation="vertical" className="shrink" />
        </div>
        <div className="w-full">
          <div className="flex justify-between border border-gray-300 rounded-md p-4">
            <div className="basis-[95%]">
              <H6>{placeName}</H6>
              <Paragraph>{placeDetails}</Paragraph>
            </div>
            <div>
              <Button size={'icon'} variant={'ghost'}>
                <EllipsisVertical className="text-gray-500" />
              </Button>
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
    </div>
  );
};
