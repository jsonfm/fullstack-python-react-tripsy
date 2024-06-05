import { ArTicketListCards } from "@/components/airtickets/ArTicketListCards";
import { OfferCard } from "@/components/offers/OfferCard";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useGetMainOffers } from "@/hooks/api/offers";

export const Home = () => {
  const { data: offers } = useGetMainOffers();
  return (
    <>
      <section className="bg-gradient-to-r">
        <div className="relative h-screen">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary/50 to-primary/10"></div>
          <img
            src="https://images.unsplash.com/photo-1548275840-cd9d5c170ce5?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -transalte-y-1/2 z-20 text-white">
            <h2 className="text-2xl md:text-4xl font-bold">Trips with Us</h2>
            <h4>Plan your trips with Us</h4>
          </div>
        </div>
      </section>
      <section className="min-h-[500px] bg-base">
        <div className="py-12">
          <div className="container-md">
            <h4 className="text-2xl md:text-3xl font-bold mb-6">
              Special Offers
            </h4>
          </div>
          <div className="flex overflow-x-auto gap-6 px-6 snap-mandatory snap-x">
            {offers?.map((offer, index) => (
              <OfferCard offer={offer} key={`offer-item-${index}`} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container-md relative">
          <div className="mb-6 flex justify-center">
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-2xl md:text-3xl font-bold mb-2">
                Air Tickets
              </h4>
              <div className="flex gap-2">
                <div className="h-[4px] w-16 bg-primary"></div>
                <div className="h-[4px] w-8 bg-primary"></div>
                <div className="h-[4px] w-4 bg-primary"></div>
              </div>
            </div>
            <div className="absolute right-0 hidden md:flex">
              <Button rounded="full">View More</Button>
            </div>
          </div>

          <div className="mt-12">
            <ArTicketListCards />
          </div>
        </div>
      </section>
      <section className="min-h-[400px] py-12 relative">
        <img
          src="https://images.unsplash.com/photo-1443827357341-5def682bb98b?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 z-10 w-full h-full">
          <div className="text-white container-md flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center gap-4 max-w-[400px]">
              <h4 className="uppercase  text-2xl md:text-3xl">
                Sign Up for our updates
              </h4>
              <div className="bg-white h-[4px] w-32"></div>
              <p>
                Stay on top all our latest products and be the first to receive
                our exclusive materials and products
              </p>{" "}
            </div>
            <div className="mt-6">
              <div className="flex">
                <Input
                  type="email"
                  className="bg-white !w-56 lg:!w-90 py-3"
                  rounded="none"
                  placeholder="email@example.com"
                />
                <Button rounded="md" variant="secondary" size="lg">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
