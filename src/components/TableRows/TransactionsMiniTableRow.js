import {
    Badge,
    Link,
    Td,
    Text,
    Tr,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { reduceStringShowMediumLength } from '../../utils'

export default function TransactionsMiniTableRow(props) {
    // eslint-disable-next-line no-unused-vars
    const textColor = useColorModeValue('gray.700', 'white')

    // eslint-disable-next-line no-unused-vars
    const { blockNumber, fromAddress, toAddress, value, timestamp, hash } =
        props
    const navigateTo = useNavigate()

    let hashReduced
    if (hash) {
        hashReduced = reduceStringShowMediumLength(hash)
    }

    let fromAddressReduced
    if (fromAddress) {
        fromAddressReduced = reduceStringShowMediumLength(fromAddress)
    }

    let toAddressReduced
    if (toAddress) {
        toAddressReduced = reduceStringShowMediumLength(toAddress)
    }

    return (
        <Tr>
            <Td>
                <VStack alignItems="left" spacing={1}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <Link onClick={() => navigateTo(`/tx/${hash}`)}>
                        <Text fontSize="md" color="blue.300" fontWeight="bold">
                            {hashReduced}
                        </Text>
                    </Link>

                    <Text fontSize="sm" color="gray.500">
                        {timestamp}
                    </Text>
                </VStack>
            </Td>

            <Td>
                <VStack alignItems="left" spacing={5}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <Link onClick={() => navigateTo(`/address/${fromAddress}`)}>
                        <Text fontSize="md" color="blue.300" fontWeight="bold">
                            From: {fromAddressReduced}
                        </Text>
                    </Link>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <Link onClick={() => navigateTo(`/address/${toAddress}`)}>
                        <Text fontSize="md" color="blue.300" fontWeight="bold">
                            To: {toAddressReduced}
                        </Text>
                    </Link>
                </VStack>
            </Td>

            <Td>
                <Badge variant="solid" colorScheme="green">
                    {' '}
                    {value.toPrecision(2)} QUAI{' '}
                </Badge>
            </Td>
        </Tr>
    )
}
