import React, { useContext } from 'react';
import { FiUser, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { IntlContext } from '../context/IntlContext';

const UserDetailsComponent = ({ user }) => {
  const { locale } = useContext(IntlContext);
  const messages = {
    en: {
      userProfile: 'User Profile',
      farmingSince: 'Farming Since',
      activeFarmer: 'Active Farmer',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      farmSize: 'Farm Size',
      soilType: 'Soil Type',
      preferredCrops: 'Preferred Crops'
    },
    hi: {
      userProfile: 'उपयोगकर्ता प्रोफ़ाइल',
      farmingSince: 'से खेती कर रहे हैं',
      activeFarmer: 'सक्रिय किसान',
      email: 'ईमेल',
      phone: 'फोन',
      location: 'स्थान',
      farmSize: 'खेत का आकार',
      soilType: 'मिट्टी का प्रकार',
      preferredCrops: 'पसंदीदा फसलें'
    },
    bn: {
      userProfile: 'ব্যবহারকারীর প্রোফাইল',
      farmingSince: 'থেকে চাষাবাদ করছেন',
      activeFarmer: 'সক্রিয় কৃষক',
      email: 'ইমেইল',
      phone: 'ফোন',
      location: 'অবস্থান',
      farmSize: 'খামার আকার',
      soilType: 'মাটির ধরন',
      preferredCrops: 'পছন্দের ফসল'
    }
  };
  const defaultUser = {
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    location: 'Punjab, India',
    phone: '+91 98765 43210',
    farmSize: '5 acres',
    soilType: 'Loamy',
    cropPreference: 'Wheat, Rice, Maize',
    joinDate: 'January 2024',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  };

  const userData = user || defaultUser;

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold text-primary mb-6">{messages[locale].userProfile}</h2>
      
      <div className="bg-white rounded-lg p-6 shadow-sm">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 pb-8 border-b border-gray-200">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
            <img 
              src={userData.profileImage} 
              alt={userData.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-1">{userData.name}</h3>
            <p className="text-gray-600 mb-4">{messages[locale].farmingSince} {userData.joinDate}</p>
            <span className="inline-block bg-green-100 text-secondary px-3 py-1 rounded-full text-sm font-semibold">{messages[locale].activeFarmer}</span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Email */}
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 rounded-lg p-3 mt-1">
              <FiMail className="text-blue-600 text-xl" />
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">{messages[locale].email}</p>
              <p className="text-gray-900 font-semibold">{userData.email}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <div className="bg-green-100 rounded-lg p-3 mt-1">
              <FiPhone className="text-green-600 text-xl" />
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">{messages[locale].phone}</p>
              <p className="text-gray-900 font-semibold">{userData.phone}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <div className="bg-red-100 rounded-lg p-3 mt-1">
              <FiMapPin className="text-red-600 text-xl" />
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">{messages[locale].location}</p>
              <p className="text-gray-900 font-semibold">{userData.location}</p>
            </div>
          </div>

          {/* Farm Info */}
          <div className="flex items-start gap-3">
            <div className="bg-yellow-100 rounded-lg p-3 mt-1">
              <FiUser className="text-yellow-600 text-xl" />
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">{messages[locale].farmSize}</p>
              <p className="text-gray-900 font-semibold">{userData.farmSize}</p>
            </div>
          </div>
        </div>

        {/* Farming Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
          {/* Soil Type */}
          <div className="bg-amber-50 rounded-lg p-4">
            <p className="text-gray-600 text-sm font-semibold mb-2">{messages[locale].soilType}</p>
            <p className="text-lg text-primary font-bold">{userData.soilType}</p>
          </div>

          {/* Crop Preference */}
          <div className="bg-emerald-50 rounded-lg p-4">
            <p className="text-gray-600 text-sm font-semibold mb-2">{messages[locale].preferredCrops}</p>
            <p className="text-lg text-primary font-bold">{userData.cropPreference}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsComponent;
