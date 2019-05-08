import React, { Component } from 'react';
import { View,Dimensions } from 'react-native';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
import DeviceInfo from 'react-native-device-info';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      publisherProperties: {
        cameraPosition: "back",
      }
    }
    this.apiKey = '46296092';
    this.sessionId = '1_MX40NjI5NjA5Mn5-MTU1NzIyMDU5MTY0Nn5SaHNibHBsVmlYVWRUdHZadlNYUDJsbHV-UH4';
    this.token = 'T1==cGFydG5lcl9pZD00NjI5NjA5MiZzaWc9YzY5MTQwMjNmNDcyZmZiMmVhYTAwOTdjZjM5ZDg3NjA3MTE4MTE1ZDpzZXNzaW9uX2lkPTFfTVg0ME5qSTVOakE1TW41LU1UVTFOekl5TURVNU1UWTBObjVTYUhOaWJIQnNWbWxZVldSVWRIWmFkbE5ZVURKc2JIVi1VSDQmY3JlYXRlX3RpbWU9MTU1NzIyMDU5MiZub25jZT0wLjYyMzk1NDE2ODM4NjAwOTkmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU1NzMwNjk5MiZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';
  }
   getDeviceInformation = () => {
    
    let appName = DeviceInfo.getApplicationName();
    let buildNumber = DeviceInfo.getBuildNumber();
    let bundleId = DeviceInfo.getBundleId();
    let carrier = DeviceInfo.getCarrier();
    let deviceCountry = DeviceInfo.getDeviceCountry();
    let deviceId = DeviceInfo.getDeviceId();
    let deviceLocale = DeviceInfo.getDeviceLocale();
    let fontScale = DeviceInfo.getFontScale();
    let freeDiskStorage = DeviceInfo.getFreeDiskStorage();
    let manufacturer = DeviceInfo.getManufacturer();
    let maxMemory = DeviceInfo.getMaxMemory();
    let model = DeviceInfo.getModel();
    let readableVersion = DeviceInfo.getReadableVersion();
    let serialNumber = DeviceInfo.getSerialNumber();
    let systemName = DeviceInfo.getSystemName();
    let systemVersion = DeviceInfo.getSystemVersion();
    let timezone = DeviceInfo.getTimezone();
    let storageSize = DeviceInfo.getTotalDiskCapacity();
    let totalMemory = DeviceInfo.getTotalMemory();
    let userAgent = DeviceInfo.getUserAgent();
    let is24Hour = DeviceInfo.is24Hour();
    let isEmulator = DeviceInfo.isEmulator();
    let uniqueId = DeviceInfo.getUniqueID();

    return {
        app_name: appName,
        // battery_level: batteryLevel,
        build_number: buildNumber,
        bundle_id: bundleId,
        carrier: carrier,
        device_country: deviceCountry,
        device_id: deviceId,
        device_locale: deviceLocale,
        font_scale: fontScale,
        freedisk_storage: freeDiskStorage,
        // ipaddress: ipAddress,
        manufacturer: manufacturer,
        max_memory: maxMemory,
        model: model,
        readable_version: readableVersion,
        serial_number: serialNumber,
        system_name: systemName,
        system_version: systemVersion,
        timezone: timezone,
        storage_size: storageSize,
        total_memory: totalMemory,
        user_agent: userAgent,
        is24_hour: is24Hour,
        is_emulator: isEmulator,
        device_uid : uniqueId
    }
}
  render() {
    console.log(JSON.stringify(this.getDeviceInformation()))
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <OTSession apiKey={this.apiKey} sessionId={this.sessionId} token={this.token}>
          <OTPublisher style={{ width: DEVICE_WIDTH, height: DEVICE_HEIGHT }} properties={this.state.publisherProperties}/>
          {/* <OTSubscriber style={{ width: 350, height: 400 }} /> */}
        </OTSession>
      </View>
    );
  }
}