import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"; 
import { Button } from "@/components/ui/button"; 
import BiometricsForm from "./BiometricsForm"; 

interface BiometricsDialogProps {
    triggerButtonText: string;
}

const BiometricsDialog: React.FC<BiometricsDialogProps> = ({triggerButtonText }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleStartClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="start-button" onClick={handleStartClick}>
            {triggerButtonText}
          </Button>
        </DialogTrigger>

        {/* Dialog Content */}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Enter Your Biometrics</DialogTitle>
            <DialogDescription>
              Fill in your details below to get personalized recommendations.
            </DialogDescription>
          </DialogHeader>

          {/* Biometrics Form Component */}
          <BiometricsForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BiometricsDialog;
