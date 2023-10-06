import * as React from 'react'

import { Button } from '../../ui/button'
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList
} from '../../ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '../../ui/popover'

type Status = {
    value: string
    label: string
}

const statuses: Status[] = [
  {
    value: 'cerrado',
    label: 'Cerrado'
  }
]
interface ClosingStatus {
  onChange: (selectedStatus:string) => void
}

export function StatusClose ({ onChange }: ClosingStatus) {
  const [open, setOpen] = React.useState(false)
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    null
  )
  const handleStatusChange = (value:string) => {
    setSelectedStatus(
      statuses.find((status) => status.value === value) || null
    )
    setOpen(false)
    // Llamo a la función de cambio con el valor enum
    onChange(value)
  }
  return (
    <div className='flex items-center space-x-4'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant='outline' className='w-[150px] justify-start'>
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ definir estado</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='p-0' side='right' align='start'>
          <Command>
            <CommandList>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    onSelect={handleStatusChange}
                    value={status.value}
                  >
                    {status.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
