
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
        <div className="h-4 w-4 rounded-sm bg-primary-foreground"></div>
      </div>
      <span className="text-xl font-semibold text-foreground">Overcode</span>
    </div>
  );
};

export default Logo;
