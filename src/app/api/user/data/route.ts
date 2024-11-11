/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectDB } from "../../../../../database/database";
import{NextResponse,NextRequest} from 'next/server' 
import  Data from '../../../../../models/User'



connectDB()
 export  async function POST(request:NextRequest) {
        try {
          const reqBody= await request.json();
           const{name,email,message}:any=reqBody;
          
           if([name,email,message].some((field)=> field==' ')){
           console.log("all field required")
           }
      const  user = await Data.create({
               name,
               email,
               message,

        })
        
        
          
          
         
  
         return NextResponse.json({
          message:"user created succesfully",
          status:200,
             user
         })
        } catch (error:any) {
          console.error('An error occurred:', error);
             const errorResponse = {
            success: false,
            message: error.message || 'An unexpected error occurred.',
           ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
          };
        
          return new NextResponse(JSON.stringify(errorResponse), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
            },
          });
        }
        
      }


