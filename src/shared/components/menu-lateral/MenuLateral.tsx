import { Box, Drawer, useTheme } from "@mui/material"
import React from "react"

interface IAppMenuLateralProviderProps{
    children : React.ReactNode
  }
export const MenuLateral: React.FC<IAppMenuLateralProviderProps> = ({children}) =>{
    const theme = useTheme();

    return(
        <>
            <Drawer variant="permanent">
              Test
            </Drawer>

            <Box height="100vh" marginLeft={theme.spacing(28)}>
              {children}
            </Box>
            
            
        </>
        
    )
}