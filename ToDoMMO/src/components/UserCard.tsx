import { Card, Avatar, Progress } from '@mantine/core'
import sword from '../assets/spada.png'

type Props = {
    avatar?: string
    username: string
    currentExperience: number
    maxExperience: number
    level: number
    activeItemsNumber?: number
}

const debug = true

const UserCard = (props: Props) => {
    // calculating the percentage of the progress bar
    // the percentage is the current experience divided by the max experience
    // multiplied by 100 to get the percentage
    // the result is rounded to the nearest integer
    // the result is stored in the variable percentage
    const percentage = Math.round((props.currentExperience / props.maxExperience) * 100)
  return (
    <Card className={`w-full flex mt-5 xl:w-1/5 mt-20 ${debug ? "border-4 border-red-600 xl:border-blue-600" : ""}`}>
        <div className='flex xl:flex-col'>
            <div className='w-fit self-center'>
            <Avatar src={props.avatar} alt={props.username} size='xl' />
                <h2 className='font-poppins font-bold text-2xl'>{props.username}</h2>
                <div>
                    <h3 className='font-poppins font-medium text-lg'>Level {props.level}</h3>
                </div>
            </div>
            {/* TODO: here will be displayed the currently active items.
            ATM they are just a repeated image, i will include a JSON with all of them
            and from there parse the image of each item */}
            <div className='flex w-full items-center justify-center flex-wrap xl:mt-3 xl:mb-3'>
                {Array.from({length: props.activeItemsNumber || 0}, (_, i) => (
                    <img key={i} className='w-10 h-10 ' src={sword} alt='sword' />
                ))}
            </div>
        </div>
        <div className='w-full flex flex-col items-end xl:items-center'>
            <Progress
                className='w-full'
                value={percentage}
                color='green'
                radius='xl'
                size='xl'
                styles={{
                    root: {
                        height: 20
                    }
                }}
            />
            <p className='font-poppins font-medium text-lg '>Experience: {props.currentExperience}/{props.maxExperience}</p>
        </div>
    </Card>
  )
}

export default UserCard