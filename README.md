# Windows Services saving data Battery System to GraphQL

## How to install and run

1. Clone the repository
2. Install dependencies

    ```bash
    npm install
    ```

3. Update your path where this program cloned in services_install.js
4. Install Services

    ```bash
    node services_install.js
    ```

5. make sure your graphql server is running ( i use Hasura graphql )
6. Update your credential in .env

## API Endpoints

### Databases

#### Setting Rack

- `GET /rack` - List all Rack
- `GET /rack/:rack_sn` - List specific Rack
- `DELETE /mppt/:mppt_sn"` - Delete mppt by mppt_sn
- `POST /mppt` - Create a new mppt with json body :

    ```bash
    {
    "rack_sn":"examplerack001",
    "uuid_user":"example001"
    }
    ```

#### Setting RMS

- `GET /rms1` - List all RMS
- `GET /rms1/:rms_sn` - List specific RMS
- `DELETE /rms1/:rms_sn"` - Delete RMS by rms_sn
- `POST /rms1` - Create a new rms with json body :

    ```bash
    {
     "rms_sn":"exampleRMS001",
    "rms_ip":"200.10.2.212",
    "rack_sn":"example001",
    "config":{
          "note": "cms",
          "frame_name": "default",
          "total_cell": 32,
          "uom_current": "A",
          "capacity_new": 10,
          "capacity_now": 10,
          "uom_capacity": "KWH",
          "cell_not_used": "4, 8, 9, 13, 14, 19, 23, 24, 28, 29, 34, 39, 44",
          "uom_total_cell": "Pcs",
          "maximum_current": 200,
          "uom_temperature": "°C",
          "uom_cell_voltage": "mV",
          "maximum_temperature": 56.8,
          "minimum_temperature": 20.5,
          "maximum_cell_voltage": 3600,
          "minimum_cell_voltage": 2600,
          "maximum_different_cell": 600,
          "total_frame": 8
        }  
    }
    ```

#### Setting Inverter

- `GET /inverter1` - List all inverter
- `GET /inverter1/:inverter_sn` - List specific inverter
- `DELETE /inverter1/:inverter_sn"` - Delete Inverter by inverter_sn
- `POST /inverter1` - Create a new inverter with json body :

    ```bash
    {
    "device_sn":"exampleINV001",
    "inverter_ip":"200.10.2.220",
    "rack_sn":"example001" 
    }

#### Setting MPPT

- `GET /mppt1` - List all Mppt
- `GET /mppt1/:mppt_sn` - List specific Mppt
- `DELETE /mppt1/:mppt_sn"` - Delete Mppt by mppt_sn
- `POST /mppt1` - Create a new mppt with json body :

    ```bash
    {
    "mppt_sn":"exampleMPPT001",
    "mppt_ip":"200.10.2.230",
    "rack_sn":"example"
    }

#### Setting Interval

- `GET /interval` - List all interval
- `GET /interval/:device` - List specific interval
- `DELETE /interval/:device"` - Delete interval by device
- `POST /interval` - Create a new interval with json body :

    ```bash
    {
    "device":"inverter",
    "post_interval":1
    }

### Data Fetching

- `GET /rms` - Get data fetching from api RMS
- `GET /inverter` - Get data fetching from api Inverter
- `GET /mppt` - Get data fetching from api MPPT

### Controller

- `POST /start` - Starting program
- `GET /stop` - Stoping program

## Postman Collection

Import the provided Postman Collection for testing the API endpoints.

### How to Import Postman Collection

1. Open Postman
2. Click on `Import` button
3. Select the file `data post graphql.postman_collection.json` from the `postman` directory
4. Start testing the endpoints

## Postman Collection File

The Postman Collection file is located in the `postman` directory and is named `data post graphql.postman_collection.json`.
