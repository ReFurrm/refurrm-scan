import { UserRole } from '../types';

interface RoleSelectorProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export default function RoleSelector({ currentRole, onRoleChange }: RoleSelectorProps) {
  const roles: { role: UserRole; label: string; icon: string }[] = [
    { role: 'admin', label: 'Admin', icon: '⚙️' },
    { role: 'ambassador', label: 'Ambassador', icon: '🌟' },
    { role: 'volunteer', label: 'Volunteer', icon: '🤝' },
    { role: 'buyer', label: 'Buyer', icon: '🛍️' },
    { role: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' }
  ];

  return (
    <div className="bg-[#F6F4EE] border-2 border-[#C8BFAE] rounded-2xl p-6 mb-8">
      <h3 className="font-['Poppins'] font-semibold text-xl text-[#1C2E25] mb-4">View Dashboard As:</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {roles.map(({ role, label, icon }) => (
          <button
            key={role}
            onClick={() => onRoleChange(role)}
            className={`p-4 rounded-xl font-['Poppins'] font-semibold transition-all ${
              currentRole === role
                ? 'bg-[#315E47] text-[#F6F4EE] scale-105'
                : 'bg-white text-[#1C2E25] hover:bg-[#C8BFAE]'
            }`}
          >
            <div className="text-3xl mb-2">{icon}</div>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
