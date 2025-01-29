import { UserRepos } from './Projects'

export function Home() {
  return (
    <div>
      {/* Add UserRepos component here */}
      <UserRepos />
      
      {/* If you want to add LinkedIn badge, you'll need to use their script */}
      <div 
        className="badge-base LI-profile-badge" 
        data-locale="en_US" 
        data-size="medium" 
        data-theme="dark" 
        data-type="HORIZONTAL" 
        data-vanity="lefteris-gilmaz-05a41a238" 
        data-version="v1"
      >
        {/* LinkedIn badge will be rendered here by LinkedIn's script */}
      </div>
    </div>
  );
}