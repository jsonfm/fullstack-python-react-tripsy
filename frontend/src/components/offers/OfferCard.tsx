import { Button } from "@/components/ui/Button";
import { OfferFeature } from "./OfferFeature";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  offer: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const OfferCard = ({ offer }: Props) => {
  const features = [1, 2, 3, 4];
  return (
    <div className="snap-center flex flex-col lg:flex-row rounded-md overflow-hidden min-w-[300px] md:min-w-[400px]  lg:min-w-[800px] h-[650px]   lg:h-[390px]">
      <div className="w-full lg:w-2/5 h-2/6 lg:h-full">
        <img
          src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJvcGljYWwlMjByZXNvcnR8ZW58MHx8MHx8fDA%3D"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-3/5 h-4/6 md:h-full bg-primary text-white text-sm">
        <div className="flex items-start mb-4">
          <div className="px-6 pt-6">
            <h4 className="text-xl md:text-2xl uppercase">
              Four Seasons Hotel Resort
            </h4>
            <div className="h-[2px] w-full bg-white"></div>
          </div>

          <div className="pr-6">
            <div className="bg-warning h-10 px-1 text-white">
              <p>Top</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-6 pb-6 mt-2">
          <div className="flex mb-4">
            <p className="text-xl">$5000</p>
          </div>
          <p className="mb-6 h-20  overflow-y-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            nostrum, enim perferendis nulla aspernatur sit modi magni sapiente
            impedit minima dolorum laudantium qui amet veritatis soluta dicta
            vero delectus ea.
          </p>
          <div className="grid grid-cols-2 gap-4 ">
            {features?.map((feature, index) => (
              <OfferFeature feature={feature} key={`feature-${index}`} />
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            <Button size="sm" variant="white" rounded="full">
              Book now
            </Button>
            <Button size="sm" outlined variant="white" rounded="full">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
