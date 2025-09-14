import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { LinkIcon, LogOut } from 'lucide-react';
import { UrlState } from '@/context';
import { logout } from '@/db/apiAuth';
import useFetch from '@/hooks/use-fetch';
import { BarLoader } from 'react-spinners';
const Header = () => {

  const navigate=useNavigate();
  const {user,fetchUser}=UrlState();
  const {loading,fn:fnLogout}=useFetch(logout);
  return <><nav className='py-4 pl-4 flex justify-between items-center'>
      <Link to="/">
      <img src="/logo.png" className='h-16' alt="Logo"/>
      </Link>
      <div>
        {!user?(
          <Button onClick={()=>navigate("/auth")}>Login</Button>
        ):(
            <DropdownMenu>
            <DropdownMenuTrigger className='w-10 rounded-full overflow-hidden'>
              <Avatar>
                <AvatarImage src={user?.user_metadata?.profile_pic} />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{user?.user_metadata?.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/dashboard" className="flex">
                <LinkIcon className='mr-2 h-4 w-4'/>
                My Links
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
              onClick={() => {
                  fnLogout().then(() => {
                    fetchUser();
                    navigate("/");
                  });
                }}
              className="text-red-400">
                <LogOut className='mr-2 h-4 w-4'/>
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          )
        }
      </div>
  </nav>
      {loading && <BarLoader className='mb-4' width={"100%"} color="#36d7b7"/>}
  </>
}

export default Header
