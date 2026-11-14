import { useState } from "react";
import Footer from "../components/Footer";

const AVATAR_OPTIONS = [
  { icon: "👤", label: "Person" },
  { icon: "🤖", label: "Robot" },
  { icon: "🐸", label: "Frog" },
  { icon: "🧙", label: "Wizard" },
  { icon: "🦆", label: "Duck" },
  { icon: "👽", label: "Alien" },
];

export default function Settings({
  darkMode,
  onDarkModeChange,
  reducedMotion,
  onReducedMotionChange,
  showRelatedArticles,
  onShowRelatedArticlesChange,
  profile,
  onProfileChange,
}) {
  const [displayName, setDisplayName] = useState(profile?.displayName || "");
  const [avatar, setAvatar] = useState(profile?.avatar || AVATAR_OPTIONS[0].icon);
  const [status, setStatus] = useState("");

  function createFakeProfile(event) {
    event.preventDefault();
    const name = displayName.trim();

    if (!name) {
      setStatus("Enter a display name to create your pretend profile.");
      return;
    }

    onProfileChange({ displayName: name, avatar });
    setDisplayName(name);
    setStatus("Pretend profile created on this device.");
  }

  function removeFakeProfile() {
    onProfileChange(null);
    setDisplayName("");
    setAvatar(AVATAR_OPTIONS[0].icon);
    setStatus("Pretend profile removed from this device.");
  }

  return (
    <>
      <main className="container settings-page">
        <header className="settings-heading">
          <span className="eyebrow">Make yourself at home</span>
          <h1>Settings</h1>
          <p>Personalize your questionable reading experience.</p>
        </header>

        <div className="settings-grid">
          <section className="settings-card">
            <h2>Reading preferences</h2>
            <label className="setting-option">
              <span>
                <strong>Dark mode</strong>
                <small>Give the questionable advice a darker look.</small>
              </span>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={(event) => onDarkModeChange(event.target.checked)}
              />
            </label>
            <label className="setting-option">
              <span>
                <strong>Reduce motion</strong>
                <small>Turn down animated transitions and effects.</small>
              </span>
              <input
                type="checkbox"
                checked={reducedMotion}
                onChange={(event) => onReducedMotionChange(event.target.checked)}
              />
            </label>
            <label className="setting-option">
              <span>
                <strong>Show related articles</strong>
                <small>Show article recommendations beside each guide.</small>
              </span>
              <input
                type="checkbox"
                checked={showRelatedArticles}
                onChange={(event) => onShowRelatedArticlesChange(event.target.checked)}
              />
            </label>
          </section>

          <section className="settings-card">
            <h2>Pretend account</h2>
            <p className="settings-description">
              Create a local-only profile for fun. It does not sign you in or
              connect to a server.
            </p>
            {profile && (
              <p className="fake-profile">
                <span>Currently pretending to be</span>
                <span className="fake-profile-avatar" aria-hidden="true">
                  {profile.avatar}
                </span>
                <strong>{profile.displayName}</strong>
              </p>
            )}
            <form className="fake-account-form" onSubmit={createFakeProfile}>
              <fieldset className="avatar-picker">
                <legend>Choose a profile icon</legend>
                <div className="avatar-options">
                  {AVATAR_OPTIONS.map((option) => (
                    <button
                      key={option.label}
                      className={`avatar-choice${avatar === option.icon ? " selected" : ""}`}
                      type="button"
                      aria-label={option.label}
                      aria-pressed={avatar === option.icon}
                      onClick={() => setAvatar(option.icon)}
                    >
                      {option.icon}
                    </button>
                  ))}
                </div>
              </fieldset>
              <label htmlFor="fake-display-name">Display name</label>
              <input
                id="fake-display-name"
                type="text"
                value={displayName}
                maxLength={32}
                autoComplete="off"
                onChange={(event) => setDisplayName(event.target.value)}
                placeholder="e.g. DefinitelyAnExpert"
                required
              />
              <button type="submit">
                {profile ? "Update pretend profile" : "Create pretend profile"}
              </button>
            </form>
            {profile && (
              <button
                className="remove-profile-button"
                type="button"
                onClick={removeFakeProfile}
              >
                Remove pretend profile
              </button>
            )}
            <p className="settings-note">
              No password or email is requested. This profile is stored only
              in this browser.
            </p>
            {status && <p className="settings-status" role="status">{status}</p>}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
