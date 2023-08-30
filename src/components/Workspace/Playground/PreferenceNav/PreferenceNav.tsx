import React, { useState, useEffect } from 'react';
import { AiOutlineSetting, AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai';
import { ISettings, ITabs } from '../Playground';
import SettingsModal from '@/components/Modals/SettingsModal';
import SolutionTab from '@/components/Buttons/SolutionTab';
import { IoAdd } from 'react-icons/io5';

type PreferenceNavProps = {
    settings: ISettings;
	setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
	tabs: ITabs[];
	handleTabChange: (id: number) => void;
};

const PreferenceNav:React.FC<PreferenceNavProps> = ({ settings, setSettings, tabs, handleTabChange }) => {
    
	const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

	const handleFullscreen = () => {
		if(isFullscreen) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
		setIsFullscreen(!isFullscreen);
	}

	useEffect(() => {
		function exitHandler(e: any) {
			if (!document.fullscreenElement) {
				setIsFullscreen(false);
				return;
			}
			setIsFullscreen(true);
		}

		if (document.addEventListener) {
			document.addEventListener("fullscreenchange", exitHandler);
			document.addEventListener("webkitfullscreenchange", exitHandler);
			document.addEventListener("mozfullscreenchange", exitHandler);
			document.addEventListener("MSFullscreenChange", exitHandler);
		}
	}, [isFullscreen]);

    return (
	<div className='flex items-center justify-between bg-dark-layer-2 h-11 w-full'>
		<div className='flex items-center text-white'>
			{tabs.map(tab => (
				<SolutionTab key={tab.id} id={tab.id} title={tab.title} handleTabChange={handleTabChange} />
			))}
			<button
				type='button'
				className='bg-transparent rounded-lg text-sm p-1.5 ml-2 inline-flex items-center hover:bg-gray-800 hover:text-white text-white'
				onClick={() => (console.log('new tab'))}
			>
				<IoAdd className='h-5 w-5' />
			</button>
		</div>

		<div className='flex items-center m-2'>
			<button className='preferenceBtn group' onClick={() => setSettings({ ...settings, settingsModalIsOpen: true })} >
				<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
					<AiOutlineSetting />
				</div>
				<div className='preferenceBtn-tooltip'>Settings</div>
			</button>

			<button className='preferenceBtn group' onClick={handleFullscreen}>
				<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
					{!isFullscreen ? <AiOutlineFullscreen /> : <AiOutlineFullscreenExit />}
				</div>
				<div className='preferenceBtn-tooltip'>Full Screen</div>
			</button>
		</div>
		{settings.settingsModalIsOpen && <SettingsModal settings={settings} setSettings={setSettings} />}
	</div>
)}
export default PreferenceNav;