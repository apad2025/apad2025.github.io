# Creating an IPsec VPN on Ubuntu 22.04

## Setup.sh

Open a terminal and run `mkdir ikev2`  

Open a terminal and run `cd ikev2`  

Run the following commands:

    wget https://raw.githubusercontent.com/jawj/IKEv2-setup/master/setup.sh
    chmod u+x setup.sh
    sudo ./setup.sh

Note: You may need to remove the `[[ $(lsb_release -rs) == "18.04" ]] || [[ $(lsb_release -rs) == "20.04" ]] || exit_badly "This script is for Ubuntu 20.04 or 18.04 only: aborting (if you know what you're doing, try deleting this check)"` line if you get an error saying your OS is not supported  

Enter the [hostname](https://en.wikipedia.org/wiki/Hostname) for your VPN. If you do not have a domain, free ones are available at [No-IP](https://www.noip.com/).  

Create the VPN username and password

Choose a DNS server  

Skip the timezone part  

Enter an email address if you'd like

Skip the SSH port part  

Create an SSH username and password

## IPsec

Open a terminal and run

    sudo apt install libreswan
    sudo ipsec start
    sudo ipsec status
If you get the error `whack: Pluto is not running (no "/var/run/pluto/pluto.ctl")` after running the last command, running `sudo ipsec pluto` should fix it

## User management and PSK
In order to add a user, run:

    wget https://get.vpnsetup.net -O vpn.sh && sudo sh vpn.sh
    sudo addvpnuser.sh
Now, the last piece of information we need is the [Pre-shared key](https://en.wikipedia.org/wiki/Pre-shared_key). Run:

    sudo cat /etc/ipsec.secrets
to find it
## Client Configuration

### iOS

Open Settings and navigate through the following menus:
    
    General
    VPN & Device Management
    VPN
Next follow these steps: 
1. Click Add VPN Configuration...
2. Change type to IPsec
3. Enter any description
4. Enter the hostname we specified earlier
5. Enter the username
6. Enter the password
7. Enter the PSK  
