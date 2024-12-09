import React from 'react';

interface SkeletonProps {
  loading: boolean;
  type?: 'table' | 'card' | 'image' | 'icon';
}

const Skeleton: React.FC<SkeletonProps> = ({ loading, type = 'card' }) => {
  if (!loading) return null;

  const getShimmerStyles = () => {
    switch (type) {
      case 'table':
        return (
            <div role="status" className="animate-pulse space-y-4">
            <div className="space-x-4 flex">
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-56"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-40"></div>
            </div>
  
            {[...Array(4)].map((_, index) => (
              <div className="space-x-4 flex" key={index}>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-56"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-40"></div>
              </div>
            ))}
          </div>
        );
      case 'card':
        return (
          <div className="flex animate-pulse space-x-4">
            <div className="w-32 h-32 bg-gray-300 rounded-md dark:bg-gray-700"></div>
            <div className="flex-1 space-y-4">
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-2"></div>
            </div>
          </div>
        );
      case 'image':
        return <div className="w-64 h-40 bg-gray-300 rounded-md animate-pulse dark:bg-gray-700"></div>;
      case 'icon':
        return <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse dark:bg-gray-700"></div>;
      default:
        return null;
    }
  };

  return <>{getShimmerStyles()}</>;
};

export default Skeleton;
