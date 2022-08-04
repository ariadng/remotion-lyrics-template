interface Props {
	label: string;
}

export const AccountHandler = ({
	label
}: Props) => {
	return (

		<div className='absolute top-0 left-0 w-full flex justify-center'>
			<div className='px-[4rem] py-[1.5rem] bg-white text-black text-[4rem] font-bold rounded-bl-[2rem] rounded-br-[2rem]'>
				@{label}
			</div>
		</div>

	);
}