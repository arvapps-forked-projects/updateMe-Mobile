const translations = [
  'Tap on the middle circle to test the color',
  'Source Color',
  'Cancel',
  'Use System',
  'Save',
  'Layout',
  'Opacity',
  'Update Me v$1 is available!',
  'Download manually',
  'Update',
  'Submit',
  'Color Scheme',
  'System',
  'Light',
  'Dark',
  'Revert',
  'UpdateMe Download Link',
  'Share',
  'Share the download link',
  'Done',
  'Downloads',
  'View your downloads',
  'Updates',
  'Check for updates',
  'Tips',
  'Maximize your experience',
  'Settings',
  'Change the app settings',
  'Suggest',
  'Suggest a new app',
  'Report',
  'Report a problem with the app',
  'Share the app with friends',
  'Time to Update You!',
  'Update Me has a new version available',
  'Update Available',
  'Updates Available',
  'Update available for $1',
  'Updates Available for $1 and $2',
  'New Release',
  'Notifications for new releases',
  'App Updates',
  'Notifications for app updates',
  'Suggest an App',
  'Features',
  'Potentially unsafe apk',
  'The VirusTotal analysis of this apk reported potential risks. To install it, enable the "$1" setting in the settings page.',
  'Risk Taker',
  'Go to settings',
  '$1 was added to the downloads',
  '$1 finished downloading',
  'Install',
  'Local Version',
  'Not installed',
  'Available Version',
  'Installed',
  'Update',
  'Open',
  'Selected Provider',
  'Warning',
  "The provider's apk is potentially unsafe. Are you sure you want to continue?",
  'See analysis',
  'Continue',
  'Changing the provider will likely require uninstalling and reinstalling the app in order to install updates. Are you sure you want to continue?',
  'Providers',
  'Providers are different sources for the same app. Because they were made by different developers, they may have different versions, features or bugs.',
  'Provider',
  'Secure',
  'Package Name',
  'Version',
  'Long press to open $1 website',
  'Long press to open VirusTotal analysis',
  'Long press to copy $1 package name',
  'Long press to copy $1 version',
  'Long press to copy $1 SHA-256',
  "$1's package name copied to clipboard",
  "$1's version copied to clipboard",
  "$1's SHA-256 copied to clipboard",
  'This app is missing the dependency $1',
  'This app is missing the dependencies $1 and $2',
  'This app has an outdated dependency $1',
  'This app has outdated dependencies $1 and $2',
  'This app has an outdated complementary app $1',
  'This app has outdated complementary apps $1 and $2',
  'View dependency',
  'View updates',
  'Dismiss',
  'No files downloaded',
  'Cancel download',
  'Are you sure you want to cancel the download of $1?',
  'Keep downloading',
  "What's your name?",
  'Name is required',
  'Where is the problem?',
  'Problem location is required',
  'Describe the problem',
  'Description is required',
  'You have already submitted a report today',
  'Report submitted successfully',
  'Failed to submit report',
  'Which app do you want to suggest?',
  'App name is required',
  'Are you looking for a specific feature?',
  'You can only suggest one app per day',
  'Suggestion submitted successfully',
  'Failed to submit suggestion',
  'Failed to fetch suggestions list',
  'App Suggestions',
  'This list shows the suggested apps by users. Apps with the highest number of suggestions will be prioritized for addition to the app list.',
  'Ok',
  '$1 finished downloading',
  'Update All',
  'No updates available',
  'Long press to enter $1 page',
  'Update',
  'Downloads',
  'Install Express',
  'Install the app after downloading',
  'Fresh Start',
  'Delete all downloads when leaving the app',
  'Notifications',
  'Update Junkie',
  'Get notified when there are installed apps updates',
  'Frontline Fan',
  'Get notified when there is a new UpdateMe release',
  'Security',
  'Risk Taker',
  'Install potentially unsafe apps',
  'Appearance',
  'Chromatic Shift',
  'Change the source color of the app',
  'Dusk till Dawn',
  'Change the color scheme of the app',
  'Layout',
  'Feels like home',
  'Change the layout of the home screen',
  'There is an update available for $1',
  'There are updates available for $1 and $2',
  'Uninstall',
  'Downloaded',
  'Downloading',
] as const;

export type Translation = (typeof translations)[number];

export const DEFAULT_TRANSLATIONS = Object.fromEntries(
  translations.map(translation => [translation, translation]),
) as Record<Translation, string>;

export const DEFAULT_LANGUAGE = 'en' as const;
