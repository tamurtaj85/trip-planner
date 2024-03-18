'use client';
import { useEffect, useRef, useMemo, ComponentPropsWithoutRef } from 'react';
// import { Loader } from '@googlemaps/js-api-loader';
import GoogleMapReact from 'google-map-react';
import { cn } from '@/lib/utils';

export const GoogleMapWrapper: React.FC<ComponentPropsWithoutRef<'div'>> = ({
  className,
  children,
  ...rest
}) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div className={cn('min-w-60 min-h-60 w-full h-svh', className)} {...rest}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {children}
      </GoogleMapReact>
    </div>
  );
};
