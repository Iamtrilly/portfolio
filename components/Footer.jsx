import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className='flex flex-col items-center justify-between'>
          {/* Socials */}
          <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
          iconStyles='text-white text-[20px] hover:text-grey/60'/>
          {/* Copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Charles Misheto. All rights reserved.
          </div>
          {/* Bad pun */}
          <div className="text-muted-foreground">
            Made with tears 😭, coffee ☕, and depression. Seriously!
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer