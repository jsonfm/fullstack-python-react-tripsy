import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/Button";

export const AirTicketCard = () => {
  return (
    <div className="overflow-hidden  snap-center rounded-xl flex flex-col md:flex-row h-96 md:h-64 min-w-[300px] md:min-w-[350px] lg:min-w-[400px] shadow-xl">
      <div className="relative w-full md:w-2/5 h-1/3 md:h-full">
        <div className="absolute top-4 left-4 z-10 bg-white w-8 h-8 rounded-full font-bold text-primary flex items-center justify-center text-sm">
          5
        </div>
        <div className="absolute bottom-4 left-4 z-10 bg-white w-fit rounded-full font-bold text-primary text-sm px-2 py-1">
          $ 4700
        </div>
        <div className="w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover"
            alt="image"
          />
        </div>
      </div>
      <div className="w-full md:w-3/5 h-2/3 md:h-full p-4 bg-white">
        <div className="font-bold uppercase">
          <h4 className="">Budapest</h4>
          <Icon icon="mdi:exchange" className="text-primary" fontSize={30} />
          <h4>Faroe island</h4>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm">
            <Icon icon="solar:calendar-outline" />
            <p>25/07/2024 - 7:00pm</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon icon="ic:baseline-people" />
            <p>
              Tickets available: <span className="text-primary">10</span>
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon icon="ic:baseline-people" />
            <p>25/07/2024 - 7:00pm</p>
          </div>
        </div>
        <div className="mt-6">
          <Button rounded="full" size="md" className="text-sm">
            Buy/book a ticket
          </Button>
        </div>
      </div>
    </div>
  );
};
