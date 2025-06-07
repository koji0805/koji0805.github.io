import { profile } from '../data/profile'

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-4">ABOUT</h2>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Profile */}
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-6">Profile</h3>
            <p className="text-gray-600 leading-relaxed font-light mb-8">
              {profile.bio}
            </p>
            
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900">Experience</h4>
              <div className="space-y-2">
                {profile.experience.map((exp, index) => (
                  <p key={index} className="text-sm text-gray-600 font-light">
                    {exp}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-6">Skills</h3>
            <div className="space-y-8">
              {profile.skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">
                    {skillGroup.category}
                  </h4>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <div key={skill} className="text-sm text-gray-600 font-light">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}