import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <footer className="py-16 bg-base">
      <div className="container-md grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-6">
        <div>
          <h2 className="text-2xl md:text-4xl text-primary">Tripsy</h2>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-primary font-bold mb-4">All Descriptions</h4>
          <div className="flex flex-col gap-2">
            <a>Countries</a>
            <a>Monuments</a>
            <a>Apartments</a>
            <a>Resort Hotels</a>
          </div>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-4 opacity-0">
            All Descriptions
          </h4>
          <div className="flex flex-col gap-2">
            <a>Countries</a>
            <a>Monuments</a>
            <a>Apartments</a>
            <a>Resort Hotels</a>
          </div>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-4">About Us</h4>
          <div className="flex flex-col gap-2">
            <a>Search for tickets</a>
            <a>Contact Support</a>
            <a>Help partners</a>
            <a>Eco responsability</a>
          </div>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-4 opacity-0">About Us</h4>
          <div className="flex flex-col gap-2">
            <a>Press center</a>
            <a>For investors</a>
            <a>Dispute resolution</a>
            <a>Corporate contacts</a>
          </div>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-4">Contact Us</h4>
          <div className="flex flex-col gap-2">
            <p>
              Email: <span>tripsy@support.com</span>
            </p>
            <p>
              Phone: <span>+99 999 9999 999</span>
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-4">Social Network</h4>
          <div className="flex gap-4">
            <div>
              <Icon icon="mdi:instagram" fontSize={25} />
            </div>
            <div>
              <Icon icon="mdi:instagram" fontSize={25} />
            </div>
            <div>
              <Icon icon="mdi:instagram" fontSize={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-md mt-16">
        <p className="text-center">All rights reserved</p>
      </div>
    </footer>
  );
};
