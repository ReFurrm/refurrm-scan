import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '../types';
import RoleSelector from './RoleSelector';
import AdminDashboard from './dashboards/AdminDashboard';
import AmbassadorDashboard from './dashboards/AmbassadorDashboard';
import VolunteerDashboard from './dashboards/VolunteerDashboard';
import BuyerDashboard from './dashboards/BuyerDashboard';
import FamilyDashboard from './dashboards/FamilyDashboard';

export default function DashboardSection() {
  const { profile } = useAuth();
  const [currentRole, setCurrentRole] = useState<UserRole>('ambassador');

  useEffect(() => {
    if (profile?.role) {
      setCurrentRole(profile.role as UserRole);
    }
  }, [profile]);

  const renderDashboard = () => {
    switch (currentRole) {
      case 'admin': return <AdminDashboard />;
      case 'ambassador': return <AmbassadorDashboard />;
      case 'volunteer': return <VolunteerDashboard />;
      case 'buyer': return <BuyerDashboard />;
      case 'family': return <FamilyDashboard />;
    }
  };

  return (
    <section className="bg-[#F6F4EE] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Poppins'] font-semibold text-5xl text-[#1C2E25] text-center mb-12">
          Role-Based Dashboards
        </h2>
        <RoleSelector currentRole={currentRole} onRoleChange={setCurrentRole} />
        {renderDashboard()}
      </div>
    </section>
  );
}

