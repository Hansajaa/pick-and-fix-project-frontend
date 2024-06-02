import React from "react";
import { Footer } from "flowbite-react";
import {  BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function FootersSection(props) {
  return (
    <>
      <Footer container className="bg-[#84A98C]">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="w-48">
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
              <div>
                <Footer.Title title="Shop" className="text-[#2F3E46]"/>
                <Footer.LinkGroup col className="text-[#2F3E46]">
                  <Footer.Link  href="#">All Collections</Footer.Link>
                  <Footer.Link href="#">Winter Edition</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" className="text-[#2F3E46]"/>
                <Footer.LinkGroup col className="text-[#2F3E46]">
                  <Footer.Link href="#">Facebook</Footer.Link>
                  <Footer.Link href="#">Instagram</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" className="text-[#2F3E46]"/>
                <Footer.LinkGroup col className="text-[#2F3E46]">
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider/>
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright className="text-[#2F3E46]" href="#" by="" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon className="text-[#2F3E46]" href="#" icon={BsFacebook} />
              <Footer.Icon className="text-[#2F3E46]" href="#" icon={BsInstagram} />
              <Footer.Icon className="text-[#2F3E46]" href="#" icon={BsTwitter} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}

export default FootersSection;
