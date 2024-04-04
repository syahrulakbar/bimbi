import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  Welcome,
  MainMenu,
  Dapus,
  Rpp,
  ModulAjar1,
  ModulAjar2,
  ModulAjar3,
  ModulAjar4,
  ModulAjar5,
  ModulAjar6,
  Fakta1,
  Fakta2,
  Fakta3,
  Lkpd1,
  Lkpd2,
  Lkpd3,
  Lkpd4,
  Lkpd5,
  Lkpd6,
  Lkpd7,
  Lkpd8,
  InCorrect,
  Correct,
} from '../../screens';

export default function Router() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="MainMenu" component={MainMenu} />
      <Stack.Screen name="Dapus" component={Dapus} />
      <Stack.Screen name="Rpp" component={Rpp} />
      <Stack.Screen name="ModulAjar1" component={ModulAjar1} />
      <Stack.Screen name="ModulAjar2" component={ModulAjar2} />
      <Stack.Screen name="ModulAjar3" component={ModulAjar3} />
      <Stack.Screen name="ModulAjar4" component={ModulAjar4} />
      <Stack.Screen name="ModulAjar5" component={ModulAjar5} />
      <Stack.Screen name="ModulAjar6" component={ModulAjar6} />
      <Stack.Screen name="Fakta1" component={Fakta1} />
      <Stack.Screen name="Fakta2" component={Fakta2} />
      <Stack.Screen name="Fakta3" component={Fakta3} />
      <Stack.Screen name="Lkpd1" component={Lkpd1} />
      <Stack.Screen name="Lkpd2" component={Lkpd2} />
      <Stack.Screen name="Lkpd3" component={Lkpd3} />
      <Stack.Screen name="Lkpd4" component={Lkpd4} />
      <Stack.Screen name="Lkpd5" component={Lkpd5} />
      <Stack.Screen name="Lkpd6" component={Lkpd6} />
      <Stack.Screen name="Lkpd7" component={Lkpd7} />
      <Stack.Screen name="Lkpd8" component={Lkpd8} />
      <Stack.Screen name="InCorrect" component={InCorrect} />
      <Stack.Screen name="Correct" component={Correct} />
    </Stack.Navigator>
  );
}
