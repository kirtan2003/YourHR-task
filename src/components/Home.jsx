import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Text, FormLabel, Input, Select, Button, Avatar } from '@chakra-ui/react';
import Footer from './Footer';


const Home = () => {
  const [user, setUser] = useState(null);

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {

    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      setUser(userInfo);
    }


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="min-h-screen flex-col justify-center bg-gradient-to-r from-blue-500 to-teal-400">
      <div className={`${isSticky ? 'bg-white shadow-md fixed top-0 left-0' : ''}text-blue-500 w-full z-50 px-32 flex justify-between items-center p-5 bg-white font-bold text-xl`} >
        <Link to='/home' className='text-blue-500'>YourHR</Link>
        <div className='text-lg font-normal flex items-center justify-center gap-8'>
          <Link className='text-blue-500 hover:underline underline-offset-4'>About</Link>
          <Link className=' text-blue-500 hover:underline underline-offset-4'>Contact</Link>
          {
            user ?
              (
                <>
                  <Link className='text-blue-500 hover:underline underline-offset-4'>Your Application</Link>
                  <Link to='/home'><Avatar size='md' name={user.name} src={user.pic} /></Link>
                </>
              ) : (
                <Link
                  to="/"
                  className="inline-flex ml-8 h-9 text-blue-500 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-md transition-colors focus-visible:outline-none focus-visible:ring-1 border border-blue-300 hover:bg-gradient-to-r from-blue-500 to-teal-400 hover:text-white focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Sign Up
                </Link>
              )
          }

        </div>
      </div>


      <div className="text-center py-6 pb-10 px-32 bg-gradient-to-r from-blue-600 to-teal-500 shadow">
        <h1 className="text-5xl font-bold text-white mb-6">Find your Dream Job!</h1>
        <p className="text-lg text-white mb-8">Explore a wide range of job opportunities and take the next step in your career.
          Your ideal job is just a few clicks away. Sign up and get started today!</p>
        {
          user ? (
            <>
              <Link to = "/" className = "bg-white text-center text-blue-500 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-100">
               Edit Resume
              </Link>
              <Link to="/login" className="ml-4 bg-white text-center  text-blue-500 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-100">
               Preview resume
              </Link> 
            </>
          ): (
            <>
            <Link to = "/" className = "bg-white text-center text-blue-500 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-100">
              Sign Up
            </Link>
            <Link to="/login" className="ml-4 bg-white text-center  text-blue-500 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-100">
              Login
            </Link>
            </>
          )
        }
        
      </div >


      <section className="w-full py-5 md:py-10 lg:py-12 px-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-6 ">
            <div className="space-y-2 text-center ">
              <h2 className="text-3xl text-white font-bold  sm:text-4xl">Featured Job Postings</h2>
              <p className="text-muted-foreground">Explore the latest job opportunities from top companies.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-bold">Software Engineer</h3>
                  <div className="text-slate-500">
                    Stark Industries
                    <div className='flex items-center gap-1'>
                      <i className="bi bi-geo-alt text-sm"></i>
                      <p>Hyderabad, India</p>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <Text className="text-muted-foreground">
                    Experienced software engineer needed to join our growing team.
                  </Text>
                </CardBody>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex text-blue-500 h-9 items-center justify-center rounded-md px-4 py-2 text-sm border border-blue-300 hover:bg-gradient-to-r from-blue-500 to-teal-400 hover:text-white font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Apply Now
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-bold">Marketing Coordinator</h3>
                  <div className="text-slate-500">
                    Frog Technologies
                    <div className='flex items-center gap-1'>
                      <i className="bi bi-geo-alt text-sm"></i>
                      <p>Gurugram</p>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <Text className="text-muted-foreground">
                    Assist our marketing team in executing campaigns and events.
                  </Text>
                </CardBody>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex text-blue-500 h-9 items-center justify-center rounded-md px-4 py-2 text-sm border border-blue-300 hover:bg-gradient-to-r from-blue-500 to-teal-400 hover:text-white font-medium  shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Apply Now
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-bold">Product Manager</h3>
                  <div className="text-slate-500">
                    Mahindra Tech
                    <div className='flex items-center gap-1'>
                      <i className="bi bi-geo-alt text-sm"></i>
                      <p>Pune, India</p>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <Text className="text-muted-foreground">
                    Lead the development and launch of new products and features.
                  </Text>
                </CardBody>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex text-blue-500 h-9 items-center justify-center rounded-md px-4 py-2 text-sm border border-blue-300 hover:bg-gradient-to-r from-blue-500 to-teal-400 hover:text-white font-medium  shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Apply Now
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-bold">Data Analyst</h3>
                  <div className="text-slate-500">
                    Finlatics
                    <div className='flex items-center gap-1'>
                      <i className="bi bi-geo-alt text-sm"></i>
                      <p>Remote</p>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <Text className="text-muted-foreground">
                    Analyze data and provide insights to drive business decisions.
                  </Text>
                </CardBody>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex text-blue-500 h-9 items-center justify-center rounded-md px-4 py-2 text-sm border border-blue-300 hover:bg-gradient-to-r from-blue-500 to-teal-400 hover:text-white font-medium  shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Apply Now
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-5 md:py-10 lg:py-12 px-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl text-white font-bold  sm:text-4xl">Browse Job Categories</h2>
              <p>
                Explore job opportunities across different industries and roles.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Link
                href="#"
                className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-slate-100 p-4 hover:bg-transparent shadow-xl"
              >
                <i className="bi bi-code-slash h-8 w-8 text-4xl"></i>
                <div className="text-lg font-medium mt-4">Engineering</div>
              </Link>
              <Link
                href="#"
                className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-slate-100 p-4 hover:bg-transparent shadow-xl"

              >
                <i className="bi bi-megaphone h-8 w-8 text-4xl"></i>
                <div className="text-lg font-medium mt-4">Marketing</div>
              </Link>
              <Link
                href="#"
                className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-slate-100 p-4 hover:bg-transparent shadow-xl"

              >
                <i className="bi bi-briefcase h-8 w-8 text-4xl"></i>
                <div className="text-lg font-medium mt-4">Sales</div>
              </Link>
              <Link
                href="#"
                className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-slate-100 p-4 hover:bg-transparent shadow-xl"
              >
                <i className="bi bi-currency-dollar h-8 w-8 text-4xl"></i>
                <div className="text-lg font-medium mt-4">Finance</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-5 md:py-10 lg:py-12 px-32">
        <div className="container px-4 md:px-6 ">
          <div className=" flex gap-8 justify-around items-center">
            <div>
              <div className="space-y-2 text-center">
                <h2 className="text-3xl text-white font-bold sm:text-4xl">Find Your Next Opportunity</h2>
                <p className="text-muted-foreground pb-3">Search and filter through our extensive job listings.</p>
              </div>
              <form className="mx-auto max-w-xl space-y-4 ">
                <div className="grid">
                  <FormLabel htmlFor="search">Search</FormLabel>
                  <Input id="search" type="text" placeholder="Job title, keywords, or company" className="w-full placeholder:italic placeholder:text-zinc-800" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid">
                    <FormLabel htmlFor="location">Location</FormLabel>
                    <Input id="location" type="text" placeholder="City, state, or zip" className='placeholder:italic placeholder:text-zinc-800' />
                  </div>
                  <div className="grid">
                    <FormLabel htmlFor="category">Category</FormLabel>
                    <Select id="category" className='italic'>
                      <option value="" className='italic text-zinc-800'>Select a category</option>
                      <option value="engineering" className='italic text-zinc-800'>Engineering</option>
                      <option value="marketing" className='italic text-zinc-800'>Marketing</option>
                      <option value="sales" className='italic text-zinc-800'>Sales</option>
                      <option value="finance" className='italic text-zinc-800'>Finance</option>
                    </Select>
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Search Jobs
                </Button>
              </form>
            </div>
            <div>
              <img src="https://techcrunch.com/wp-content/uploads/2013/04/job_search.jpg" className='rounded-lg h-[395px]' alt="job search" />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <footer className="bg-gradient-to-r from-blue-600 to-teal-500 flex flex-col gap-2 sm:flex-row py-5 w-full shrink-0 items-center px-4 md:px-32 border-t border-t-slate-900">
        <p className="text-base ">&copy; 2024 YourHR. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-base hover:underline underline-offset-4" >
            Privacy Policy
          </Link>
          <Link href="#" className="text-base hover:underline underline-offset-4">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div >
  );
};

export default Home;
